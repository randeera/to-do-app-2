import {useEffect, useState} from 'react'
import './App.css'
import {onAuthStateChanged} from 'firebase/auth';
import {useUser, useUserDispatcher} from "./context/UseContext.tsx";
import {auth} from "./firebase.ts";
import {Loader} from "./component/loader/Loader.tsx";
import {TaskProvider} from "./context/TaskContext.tsx";
import {Header} from "./component/header/Header.tsx";
import {Form} from "./component/form/Form.tsx";
import {TaskList} from "./component/task-list/TaskList.tsx";
import {SignIn} from "./component/signin/SignIn.tsx";

function App() {
    const [loader, setLoader] = useState(true);
    const user = useUser();
    const userDispatcher = useUserDispatcher();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setLoader(false);
            if (user) {
                userDispatcher({type: 'sign-in', user});
            } else {
                userDispatcher({type: 'sign-out'});
            }
        });
        return () => unsubscribe();
    }, []);

  return (
    <>
        {loader ?   // if (loader)
            <Loader/>
            :           // else

            user ?  // if (user)
                (<>
                    <Header/>
                    <TaskProvider>
                        <Form/>
                        <TaskList/>
                    </TaskProvider>
                </>)
                :       // else
                <SignIn/>
        }
    </>
  )
}

export default App
