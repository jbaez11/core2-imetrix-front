import React from 'react';
import { rutaAPI } from '../../../config/Config';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-responsive';

export default function Articulos(){
	//ejecutar datatable
	$(document).ready(function (){
		$('.table').DataTable();
	})
	const Portada01 = `${rutaAPI}/mostrar-img-articulo/prueba-ipsum-1+1162.jpg`;
    return(
        <div className="content-wrapper" style={{minHeight: "494px" }}>

			<div className="content-header">

				<div className="container-fluid">

					<div className="row mb-2">
					
						<div className="col-sm-6">

							<h1 className="m-0 text-dark">Articulos</h1>

						</div>
					
					</div>

				</div>

			</div>
            <div className="content">

				<div className="container-fluid">

					<div className="row">
						
					<div className="col-lg-12">

						<div className="card card-primary card-outline">

							<div className="card-header">

								<h5 className="m-0">

									<button className="btn btn-primary" data-toggle="modal" data-target="#crearAdmin">Crear nuevo articulo</button>

								</h5>

							</div>

							<div className="card-body">

								<table className="table table-striped dt-responsive" style={{"width":"100%"}}>
									
								
									<thead>
										<tr>
											<th>#</th>
											<th>Portada</th>
											<th>Url</th>
											<th>Titulo</th>
											<th>Intro</th>
											<th>Contenido</th>
											<th>Acciones</th>	
										</tr>
									</thead>

									<tbody>
										<tr>
											<td>1</td>
											<td>
												<img src = {Portada01} alt="slide" className="img-fluid" />
											</td>
											<td>
												prueba-ipsum-1
											</td>
											<td>
												prueba Ipsum 1
											</td>
											<td>
												Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae accusa...
											</td>
											<td>
												<h2>Lorem Ipsum 1</h2>
												<img src="http://localhost:4000/mostrar-img/3438.jpg" alt="img" className="py-3 img-fluid"/>
												<div>
													Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam maxime id expedita commodi? Eius, accusantium neque placeat facere minus deserunt praesentium dolorem nulla nihil consectetur aliquid, quos quo quas reiciendis. Non dolorem, tempora rem obcaecati corporis. Nesciunt aliquid excepturi, sint odio. Vitae ipsum aliquid aperiam itaque repellat, maiores voluptatibus debitis dignissimos voluptas voluptates dolore, veritatis exercitationem dolorum eos, quae sunt.
												</div>
												<br/>
												<div>
													Voluptatum nobis delectus laborum corporis. Laborum asperiores voluptatum enim commodi nobis. Doloremque eligendi nisi amet maiores nihil iure dignissimos, labore iusto. Ut quas molestiae nihil reiciendis qui obcaecati totam facilis.
												</div>
												<br/>
												<div>
													Quo eum deleniti iure animi quod numquam autem, vitae fugiat, molestias cum repellat omnis, ea explicabo aspernatur. Earum asperiores quod, corrupti ipsa ullam aut eligendi dolor vero necessitatibus, architecto nostrum.
												</div>
												<br/>
												<div>
													Culpa similique necessitatibus velit perspiciatis quibusdam modi minima ab eligendi, nulla recusandae, maxime quis adipisci officia totam rem rerum ea voluptatem placeat ad amet cum corrupti! Sed, fugiat et nulla.
												</div>
											</td>
											<td>
												<div className="btn-group">

												<button type="button" className="btn btn-warning rounded-circle mr-2">
													<i className="nav-icon fas fa-pencil-alt"></i>
												</button>

												<button type="button" className="btn btn-danger rounded-circle">
													<i className="nav-icon fas fa-trash"></i>
												</button>
												
												</div>
											</td>	
										</tr>
									</tbody>
								

								</table>

							</div>

						</div>

						</div>

					</div>

				</div>

			</div>
        </div>

    )
}