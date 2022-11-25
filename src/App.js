// import { useState, useEffect } from 'react';
import Page from './components/Page';
// import './server/firebase';
// import { getDatabase, ref, child, get } from 'firebase/database';

function App() {
    // const [getData, setGetData] = useState([]);
    // const dbRef = ref(getDatabase());

    // const fetchData = async () => {
    //     try {
    //         const res = await get(child(dbRef, `data`));
    //         setGetData(res.val());
    //         console.log(getData);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    // useEffect(() => {
    //     fetchData();
    // }, []);
    return (
        <div className="App">
            <Page />
        </div>
    );
}

export default App;
