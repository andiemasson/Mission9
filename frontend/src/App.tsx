import './App.css'
import data from './CollegeBasketballTeams.json';

function Welcome(){
  return <h1>March Madness Information</h1>
}

function TeamCard({school, name, city, state,}:{school: string; name: string; city: string; state: string;}){

  return (
    <div style = {{ marginBottom: '50px'}}>
        <h2>{school}</h2>
        <h3>Mascot: {name}</h3>
        <h3>Location: {city}, {state}</h3>
    </div>
  );
}

function TeamList() {
  return (
    <>
      {data.teams.map((team) => (
        <TeamCard
          key={team.tid} // Unique identifier for the team
          school={team.school}
          name={team.name}
          city={team.city}
          state={team.state}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Welcome/>
      <TeamList/>
    </>
  );
}

export default App
