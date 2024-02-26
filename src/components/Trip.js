import "./TripStyles.css"
import TripData from "./TripData";

function Trip(){
    return (
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>The main crater of Taal Volcano contains a stunning lake, often referred to as the 'Taal Lake.'This lake has an acidic and warm environment due to the volcano's activity. Visitors can take boat trips on the lake and even hike up to the volcano's summit for panoramic views.</p>
            <div className="tripcard">
                <TripData
                image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
                heading="Trip in France"
                text="The main crater of Taal Volcano contains a stunning lake, often referred to as the 'Taal Lake.'This lake has an acidic and warm environment due to the volcano's activity. Visitors can take boat trips on the lake and even hike up to the volcano's summit for panoramic views."
                />

                <TripData
                image="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJhbmNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
                heading="Trip in London"
                text="The main crater of Taal Volcano contains a stunning lake, often referred to as the 'Taal Lake.'This lake has an acidic and warm environment due to the volcano's activity. Visitors can take boat trips on the lake and even hike up to the volcano's summit for panoramic views."
                />

                <TripData
                image="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1923&q=80"
                heading="Trip in Dubai"
                text="The main crater of Taal Volcano contains a stunning lake, often referred to as the 'Taal Lake.'This lake has an acidic and warm environment due to the volcano's activity. Visitors can take boat trips on the lake and even hike up to the volcano's summit for panoramic views."
                />
            </div>
        </div>
    );
}

export default Trip;