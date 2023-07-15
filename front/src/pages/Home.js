// https://reactrouter.com/en/main/hooks/use-navigate
import { useNavigate } from 'react-router'
import Button from 'react-bootstrap/Button'
import Grid from '@mui/material/Grid'


export default function Home() {
    //  Hook que permite trocar de página programaticamente e sem a necessidade de nenhum componente, 
    //  ou seja, utilizando apenas a url como parâmetro. Para isso o atribuímos a função navigate (poderia ser outro nome).
    const navigate = useNavigate()
    
    return (

        <body>               
            <div  className="intro-background">
                <Grid 
                    container
                    direction="column"
                    justifyContent="space-around" 
                    alignItems="center"
                    
                    >
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-lg-12"></span>
                    </section>
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-md-12"></span>
                    </section>
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-md-12"></span>
                    </section>
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-md-12"></span>
                    </section>
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-md-12"></span>
                    </section>
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-md-12"></span>
                    </section>
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-md-12"></span>
                    </section>
                    <section className="space">
                        <span className=".d-none p-2 mt-2 col-md-12"></span>
                    </section>

                    <div className="text-intro">
                        <p><b><strong>Campanha de Monitores</strong></b></p>
                    </div>

                    <div className="button-intro">
                        <Button variant="secondary" size="lg" className="more-info" onClick={() => navigate('/registration') }>Get Started</Button>
                    </div>
                </Grid>
            </div>

        </body>

    )
}

