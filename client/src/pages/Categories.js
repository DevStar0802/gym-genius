import React, { useState } from 'react';
import './categories.css';
import Accordion from '../../src/Components/accordion'

const Categories = () => {
    // Code will go through here
    // function will go through our seeds, read each category to determine where the work out goes. Additionally it will pull the necessary information and store it inside

    return (
        <div className="app-container text-center">
            <h1 className='m-4'>Categories</h1>

            <div className='accordion-container d-flex flex-column justify-content-center align-items-center'>

                <Accordion
                    title="Upper Body"
                    content="A Workout"
                />
                <Accordion
                    title="Lower Body"
                    content="Another Workout"
                />
                <Accordion
                    title="Cardio"
                    content="Yet Another Workout"
                />
                <Accordion
                    title="Core"
                    content="You guessed it, ANOTHER workout"
                />
            </div>
        </div>

    )
};

export default Categories;


        // <div className='container'>
        //     <div className="accordion" id="accordionExample">

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        //                     Upper Body
        //                 </button>
        //             </h2>
        //             <div id="collapseOne" className="accordion-collapse collapse show bg-dark text-white" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body row">
        //                     <div className='text-center'>

        //                         <strong>Workout 1</strong>
        //                         <br />
        //                         Just a test description
        //                         <br />
        //                         <button className='rounded'>Add to Workout</button>
        //                     </div>
        //                 </div>
        //                 <div className="accordion-body text-center">
        //                     <strong>Workout 1</strong>
        //                     <br />
        //                     Just a test description
        //                     <br />
        //                     <button className='rounded'>Add to Workout</button>
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        //                     Lower Body
        //                 </button>
        //             </h2>
        //             <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <strong>Workout 2</strong> Another test description
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        //                     Cardio
        //                 </button>
        //             </h2>
        //             <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <strong>Workout 3</strong> Yet again, another test description.
        //                 </div>
        //             </div>
        //         </div>

        //         <div className="accordion-item m-5">
        //             <h2 className="accordion-header">
        //                 <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        //                     Core
        //                 </button>
        //             </h2>
        //             <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        //                 <div className="accordion-body">
        //                     <strong>Workout 4</strong> You guessed it! ANOTHER test description
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>