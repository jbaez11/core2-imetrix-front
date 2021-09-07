import React from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import 'datatables.net-responsive';

export default function Usuarios(){
	//crear dataset para datatables

	const dataSet = [
		[1,"admin","admin@admin.com","sad234567"],
		[2,"jonathan21","jbaez@imterix.com.co","sad234567"]
	]
	//ejecutar datatable
	$(document).ready(function (){
		$('.table').DataTable({
			data: dataSet,
			

			columns: [
		            { title: "#" },
		            { title: "Usuario" },
					{ title: "Email" },
		            
		    ]
		});
	})
    return(
        <div className="content-wrapper" style={{minHeight: "494px" }}>

			<div className="content-header">

				<div className="container-fluid">

					<div className="row mb-2">
					
						<div className="col-sm-6">

							<h1 className="m-0 text-dark">Usuarios</h1>

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

								

							</div>

							<div className="card-body">

								<table className="table table-striped dt-responsive" style={{"width":"100%"}}>
									
								
									
								

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