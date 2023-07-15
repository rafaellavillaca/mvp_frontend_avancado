import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "../components/Navbar";
import Axios from 'axios';
import React, { useState} from 'react'
import './pages.css';
import Footer from "../components/Footer";

function Registration() {
    const url = "http://127.0.0.1:5000/monitor"
    const [data, setData] = useState({
        nome: '',
        email: '',
        habilidade: '',
        disponibilidade: ''
    });

    const submit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nome',  data.nome);
        formData.append('email',  data.email);
        formData.append('habilidade',  data.habilidade);
        formData.append('disponibilidade',  data.disponibilidade);

        if (data.nome === '') {
            alert("Escreva o nome do Monitor!");
          } else if (data.email === ''||  data.habilidade === ''||  data.disponibilidade === '')  {
            alert("todos os campos precisam ser preenchidos!");
          } else {
            Axios.postForm(url, {
                nome: data.nome,
                email: data.email,
                habilidade: data.habilidade,
                disponibilidade: data.disponibilidade,
    
            })
            .then(res => {
                alert("data added successfully!")
            })
            
          }
          
        
        // const response = await Axios.post(url, formData
        //     );
        // console.log('Resposta do servidor:', response.data);


    };



    function handle(e) {
        const newdata={ ...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)

    }

  return (

        <section className="registration"> 
                <Navbar/>
                <main >
                    <div className="container border border-dark" > 
                        <section className="space">
                            <span className=".d-none p-2 mt-2 col-lg-12"></span>
                        </section>
                        <Form onSubmit={(e)=> submit(e)}>
                            <Form.Group className="mb-3" style={{fontWeight: 'bold'}} onChange={(e)=>handle(e)} value={data.nome} >
                                <Form.Label>Nome</Form.Label>
                                <Form.Control id="nome"  type="nome" placeholder="Enter your nome" />
                            </Form.Group>
                            <Form.Group className="mb-3"  style={{fontWeight: 'bold'}} onChange={(e)=>handle(e)} value={data.email}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control  id="email" type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group className="mb-3"  style={{fontWeight: 'bold'}} onChange={(e)=>handle(e)} value={data.habilidade}>
                                <Form.Label>Habilidade</Form.Label>
                                <Form.Control id="habilidade" type="text" placeholder="Habilidade" />
                            </Form.Group>
                            <Form.Group className="mb-3"  style={{fontWeight: 'bold'}} onChange={(e)=>handle(e)} value={data.disponibilidade}>
                                <Form.Label>Disponibilidade</Form.Label>
                                <Form.Control id="disponibilidade" type="text" placeholder="MM/DD/YYYY HH:MM" />
                            </Form.Group>       
                            <Button onClick={(submit) } variant="primary"  className="btn btn-primary" type="submit">
                                Adicionar
                            </Button>
                            <section className="space">
                                <span className=".d-none p-2 mt-2 col-lg-12"></span>
                            </section>
                        </Form>
                    </div>
                </main>
                <Footer/>
        </section>
    
  );
}

export default Registration;