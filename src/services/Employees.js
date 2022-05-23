const API_EMPLOYEES = 'https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/yasar_altamirano';

//Obtiene los empleados almacenados
export const getEmployees = async () => {
    const result = await fetch(API_EMPLOYEES);
    const employees = await result.json();
    return employees;
}

//Guarda un nuevo empleado
export const saveEmployee = async employee => {
    const result = await fetch(API_EMPLOYEES, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(employee)
    });
    const emp = await result.json();
    return emp;
}