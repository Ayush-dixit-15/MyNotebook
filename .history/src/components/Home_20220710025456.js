import Notes from './Notes';

const Home = (props) => {
  {showAlert} = props
    return (
        <div>
    
          <Notes showAlert={showAlert} />      
        </div>
    )
}

export default Home