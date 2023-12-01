import React from 'react';
import logo from './logo.svg';
import './App.css';
import BATable from './BATable';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  let data = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    }
  ]

  return (
    <div className="App">
      <BATable dataSource={data} label='Data' cols={[
        {
          Heading: "Id",
          key: "id"
        },
        {
          Heading: "Title",
          key: "title"
        },
        {
          Heading: "Complete Status",
          key: "Completed",
          type : Boolean
        },
      ]} />

    </div>
  );
}

export default App;
