
// import { useState } from 'react';
// import './App.css';

// const App = () => {
//   const [users, setUsers] = useState([])

//   const fetchData = ((e) => {
//     const query = e.target.value
//     console.log(e.target.value);
//     fetch(`https://api.escuelajs.co/api/v1/categories/${query}`)
//       .then(response => {
//         return response.json()
//       })
      
//       .then(response => {
//         setUsers(response)
//       })
//   })

//   return (
//     <div>
//       <input  label="Search User" />
//       <button onClick={fetchData}></button>
//       {users.length > 0 && (
//         <div>
//           {users.map(user => (
//             <div>
//               <p key={user.title}></p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   )
// }

// export default App;
// import React, { useMemo, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const expensiveCalculation = (count) => {
//     console.log("Expensive calculation...");
//     let result = 0;
//     for (let i = 0; i < count; i++) {
//       result += i;
//     }
//     return result;
//   };  

//   const memoizedValue = useMemo(() => {
//     return expensiveCalculation(count);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <br />
//       <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
//       <br />
//       <p>Memoized value: {memoizedValue}</p>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Accordion from './Accordion';

const App = () => {
  return (
    <div className='accordion-main'>
      <Accordion title="Accordion 1" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime asperiores expedita quae officiis obcaecati quibusdam a. Cupiditate, quidem corrupti. Ea magni provident ex distinctio numquam eius reprehenderit eaque rerum?
    Esse deleniti ducimus dolore aspernatur obcaecati hic, corporis cum exercitationem delectus quisquam ullam itaque tempore sed maxime nobis suscipit voluptate unde rem soluta ipsam praesentium amet. Rerum commodi iusto totam.
    Modi illum officia ipsum autem est optio! Doloribus et voluptatibus eos labore, dolorum non obcaecati rerum iusto mollitia hic nulla, ipsam dolorem laborum vel, praesentium soluta optio molestiae earum magnam." />
      <Accordion title="Accordion 2" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime asperiores expedita quae officiis obcaecati quibusdam a. Cupiditate, quidem corrupti. Ea magni provident ex distinctio numquam eius reprehenderit eaque rerum?
    Esse deleniti ducimus dolore aspernatur obcaecati hic, corporis cum exercitationem delectus quisquam ullam itaque tempore sed maxime nobis suscipit voluptate unde rem soluta ipsam praesentium amet. Rerum commodi iusto totam.
    Modi illum officia ipsum autem est optio! Doloribus et voluptatibus eos labore, dolorum non obcaecati rerum iusto mollitia hic nulla, ipsam dolorem laborum vel, praesentium soluta optio molestiae earum magnam." />
      <Accordion title="Accordion 3" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus maxime asperiores expedita quae officiis obcaecati quibusdam a. Cupiditate, quidem corrupti. Ea magni provident ex distinctio numquam eius reprehenderit eaque rerum?
    Esse deleniti ducimus dolore aspernatur obcaecati hic, corporis cum exercitationem delectus quisquam ullam itaque tempore sed maxime nobis suscipit voluptate unde rem soluta ipsam praesentium amet. Rerum commodi iusto totam.
    Modi illum officia ipsum autem est optio! Doloribus et voluptatibus eos labore, dolorum non obcaecati rerum iusto mollitia hic nulla, ipsam dolorem laborum vel, praesentium soluta optio molestiae earum magnam." />
    </div>
  );
};

export default App;
