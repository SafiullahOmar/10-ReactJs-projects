import React from 'react'

function navigations() {
    return (
        <div>

            <nav  className="container">

                <div className="logo">
                    <img src="/images/brand_logo.png" alt='log_image' />
                </div>

                <ul>
                    <li href="#">menue</li>
                    <li href="#">location</li>
                    <li href="#">about</li>
                    <li href="#">contact</li>
                </ul>

                <button>login</button>
            </nav>



        </div>
    )
}

export default navigations