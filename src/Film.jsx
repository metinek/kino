import './Film.css';

function Film(props) {
  return (
    <div className="Film">
        <div className='obrazek'><img src={props.obraz}/></div>
        <div className='nazwaTyp'>
            <p className='nazwa'>{props.nazwa}</p>
            <p className='typ'>{props.typ}</p>
        </div>

            { props.premiera ? <><div className='premiera'>PREMIERA</div><br></br><br></br></> : null }
            { props.studyjny ? <><div className='studyjny'>STUDYJNY</div><br></br></> : null }



        <div className='godziny'>
          {props.godziny.map((k)=>(<div className='godzina' key={k}>{k}</div>))}
        </div>

    </div>
  );
}

export default Film;
