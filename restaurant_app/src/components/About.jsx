import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="heading">About Us</h1>
                <div className="about-top">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum est accusantium doloremque vitae, cumque expedita quibusdam culpa repudiandae nisi in possimus magnam architecto maiores! Suscipit nesciunt labore ducimus recusandae dicta?
                Rerum nemo sed est ab eveniet distinctio iste fugit voluptas iure odio quam dolore placeat possimus vel in, rem beatae cupiditate. Mollitia dolores ipsa impedit a dolorem. Quidem, ad asperiores.
               </div>
               <div className="about-bottom">
                   <div className="picture">Pic</div>
                   <div className="about-info">
                       <ul>
                           <li>Info</li>
                           <li>Info</li>
                           <li>Info</li>
                       </ul>
                   </div>
                   <div className="maps">Maps</div>
               </div>
            </div>
        );
    }
}

export default About;