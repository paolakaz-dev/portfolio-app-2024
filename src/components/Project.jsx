export default function Project(props) {
    return (
        <div className="slider-project">
        <a href={props.project.url} target="_blank">
            <div className="project-text">
                <h2>{props.project.text}</h2>
                <p>{props.project.stack}</p>
            </div>
            <div 
                className="project" 
                style={{ 
                    backgroundImage: `url(${props.project.img})`,
                    width: '70vw',
                }}
            ></div>
            
        </a>
        </div>
    );
}
