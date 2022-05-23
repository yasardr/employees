import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "JPEG", "PNG"];

const UploadPage = ({isAuthenticate}) => {
    const navigate = useNavigate();
    const [file, setFile] = useState(null);
    const [storage, setStorage] = useState(null);
    
    useEffect(() => {
        if (!isAuthenticate) {
            //Redireccionar si el usuario no esta logeado
            navigate('/');
        }
    }, []);

    //Limpia los nodos de imagenes
    const clearImgs = name => {
        const container = document.getElementById(name);
        let child = container.firstChild;
        while (child) {
            container.removeChild(child);
            child = container.firstChild;
        }
    }

    //Carga de nuevas imagenes
    const handleChange = async file => {
        clearImgs('carousel-imgs');
        clearImgs('container-imgs');
        document.getElementById('carousel').style.display = 'none';
        
        for (const element of file) {
            const reader = new FileReader();
            reader.onload = await fileOnload;
            reader.readAsDataURL(element);
        }
        
        setFile(file);
        document.getElementById('btn-save').style.display = 'block';
    }

    //Mostrar las imagenes que son cargadas
    const fileOnload = async (e) => {
        const container = document.getElementById('container-imgs');
        const img = document.getElementById('img-preview');
        const result = e.target.result;
        const aux = img.cloneNode();
        aux.style.display = 'block';
        aux.setAttribute('src', result);
        container.appendChild(aux);
    }

    //Almacena en storage las imagenes cargadas
    const handleSave = () => {
        document.getElementById('btn-save').style.display = 'none';
        const arr = [];
        if (storage) {
            for (const element of storage) {
                arr.push(element);
            } 
        }
        for (const item of file) {
            arr.push(item);
        }
        setStorage(arr);
        document.getElementById('btn-storage').style.display = 'block';
    }

    //Muestra el carrusel de imagenes
    const handleStorage = () => {
        document.getElementById('btn-storage').style.display = 'none';
        clearImgs('container-imgs');
        storage.forEach(async item => {
            const reader = new FileReader();
            reader.onload = await fileOnloadCar;
            reader.readAsDataURL(item);
        });
    }

    //Muestra y construye imagenes del carrusel
    const fileOnloadCar = async (e) => {
        const carousel = document.getElementById('carousel');
        const container = document.getElementById('carousel-imgs');

        const div = document.createElement('div');
        div.className = 'carousel-item';//active
        const img = document.createElement('img');
        const result = e.target.result;
        img.setAttribute('src', result);
        img.className = 'd-block w-100';
        img.alt = '...';
        div.appendChild(img);
        container.appendChild(div);
        container.firstChild.className = 'carousel-item active';
        carousel.style.display = 'block';
    }
      
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center mt-5'>
                    <button id='btn-storage' type='button' style={{ display: 'none' }} className='btn btn-success mb-3' onClick={handleStorage}>Storage</button>
                </div>
                <div className='col-12 d-flex justify-content-center mt-5'>
                    <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={true} />
                </div>
                <div className='col-12 mt-5 d-flex align-items-center flex-column' style={{ textAlign: 'center' }}>
                    <h1>Preview</h1>
                    <button id='btn-save' type='button' style={{ display: 'none' }} className='btn btn-success mb-3' onClick={handleSave}>Save</button>
                    <div id='container-imgs'>
                    </div>
                    <img style={{ display: 'none' }} id='img-preview' className='mb-2' width='300px' height='400px' alt='img' />
                </div>
                <div>
                <div id="carousel" className="carousel slide" data-bs-ride="carousel" style={{ display: 'none' }}>
                    <div id='carousel-imgs' className="carousel-inner">
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UploadPage;