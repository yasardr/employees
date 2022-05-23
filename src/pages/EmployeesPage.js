import React, { useEffect, useState, useMemo } from 'react';
import DataTable from "react-data-table-component";
import { useNavigate } from 'react-router-dom';
import { getEmployees, saveEmployee } from "../services/Employees";
import Swal from 'sweetalert2';

// Columnas del datatable
const columns = [
  {
    id: 1,
    name: "Name",
    selector: (row) => row.name,
    sortable: true,
    reorder: true
  },
  {
    id: 2,
    name: "Lastname",
    selector: (row) => row.last_name,
    sortable: true,
    reorder: true
  },
  {
    id: 3,
    name: "Birthday",
    selector: (row) => row.birthday,
    sortable: true,
    right: true,
    reorder: true
  }
];

const FilterComponent = ({ filterText, onFilter, onClear }) => (
  <div className='row'>
    <div className='col-auto'>
      <input
          id="search"
          type="text"
          placeholder="Name or Lastname"
          aria-label="Search Input"
          value={filterText}
          onChange={onFilter}
          className="form-control"
        />
    </div>
    <div className='col-auto'>
      <button className='btn btn-danger' type="button" onClick={onClear}>
        X
      </button>
    </div>
  </div>
);

const EmployeesPage = ({isAuthenticate}) => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [pending, setPending] = React.useState(true);
  const [updateEmployees, setUpdateEmployees] = React.useState(false);
  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const filteredItems = employees.filter(
    (item) => {
      return ( item.name && item.name.toLowerCase().includes(filterText.toLowerCase()) ) ||
      ( item.last_name && item.last_name.toLowerCase().includes(filterText.toLowerCase()) );
    }
  );

  const subHeaderComponentMemo = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);
    
  useEffect(() => {
      if (!isAuthenticate) {
          navigate('/');
      } else {
        const result = getEmployees();
        result.then(({data}) => {
          const list = data.employees.map(employee => {
            const d = new Date(employee.birthday);
            let month = '' + (d.getMonth() + 1);
            let day = '' + d.getDate();
            let year = d.getFullYear();
            if (month.length < 2) month = `0${month}`;
            if (day.length < 2) day = `0${day}`;
            return {
              ...employee,
              birthday: `${year}-${month}-${day}`
            }
          });
          setEmployees(list);
          setPending(false);
        }).catch(e => {
          console.log(e);
          Swal.fire(
            'Error!',
            'Something went wrong',
            'error'
          );
        });
      }
  }, [updateEmployees]);

  const handleSubmit = () => {
    Swal.fire({
      title: 'Saving...',
      icon: 'info',
      timer: 60000
    });
    const name = document.getElementById('name');
    const last_name = document.getElementById('lastname');
    const birthday = document.getElementById('birthday');
    const employee = saveEmployee({
      name: name.value.toUpperCase(),
      last_name: last_name.value.toUpperCase(),
      birthday: birthday.value
    });
    employee.then(({data}) => {
      cleanForm(name, last_name, birthday);
      setUpdateEmployees(true);
      Swal.fire(
        'Successful!',
        data,
        'success'
      );
    }).catch(e => {
      console.log(e);
      Swal.fire(
        'Error!',
        'Something went wrong',
        'error'
      );
    });
  }

  const cleanForm = (name, lastname, birthday) => {
    name.value = '';
    lastname.value = '';
    birthday.value = '0000-00-00';
  }

  const handleAddEmployee = cancel => {
    const form = document.getElementById('section-form');
    const add = document.getElementById('btn-add');
    const btnCancel = document.getElementById('btn-cancel');

    if (cancel) {
      const name = document.getElementById('name');
      const last_name = document.getElementById('lastname');
      const birthday = document.getElementById('birthday');
      form.style.display = 'none';
      add.style.display = 'block';
      btnCancel.style.display = 'none';
      cleanForm(name, last_name, birthday);
    } else {
      form.style.display = 'block';
      add.style.display = 'none';
      btnCancel.style.display = 'block';
    }
  }
    
  return (
    <div className='row mt-3 mb-3 justify-content-center'>
      <div className='col-12 d-flex justify-content-end'>
        <button id='btn-add' onClick={() => handleAddEmployee(false)} className='btn btn-primary m-3'>Add</button>
        <button id='btn-cancel' onClick={() => handleAddEmployee(true)} className='btn btn-danger m-3' style={{ display: 'none'}}>Cancel</button>
      </div>
      <div id='section-form' className='col-sm-12 col-md-11 mt-3 mb-3' style={{ display: 'none'}}>
        <div className='card'>
          <div className='card-body'>
            <form onSubmit={handleSubmit} className="row">
              <div className="col-sm-12 col-md-6 mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control " id="name" maxLength={30} required/>
              </div>
              <div className="col-sm-12 col-md-6 mb-3">
                <label className="form-label">Lastname</label>
                <input type="text" className="form-control" id="lastname" maxLength={30} required/>
              </div>
              <div className="col-sm-12 col-md-6 mb-3">
                <label className="form-label">Birthday</label>
                <input type="date" className="form-control" id="birthday" max="2000-01-01" min="1970-01-01" required/>
              </div>
              <div className='d-flex justify-content-end'>
                <button
                    id='btn-save-employee'
                    type='submit'
                    className='btn btn-success'>
                    Registrar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='col-sm-12 col-md-11'>
        <div className='card'>
          <div className='card-body'>
            <DataTable
              title="Employees"
              columns={columns}
              data={filteredItems}
              defaultSortFieldId={1}
              pagination
              paginationResetDefaultPage={resetPaginationToggle}
              progressPending={pending}
              subHeader
              subHeaderComponent={subHeaderComponentMemo}
              persistTableHead
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeesPage;