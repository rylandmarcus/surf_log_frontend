import { createBrowserRouter, createRoutesFromElements, Route, Routes } from "react-router-dom";
import App from './App'
import { indexLoader, sessionShowLoader, spotsLoader } from "./loaders";
import SessionsIndex from "./pages/SessionsIndex";
import SpotsIndex from "./pages/SpotsIndex";
import { SessionsShow } from "./pages/SessionsShow";
import { createSession, createSpot, createUser, deleteSession, updateSession } from "./actions";
import SessionsNew from "./pages/SessionsNew";
import Login from "./pages/Login";
import SessionsEdit from "./pages/SessionsEdit";
import Signup from "./pages/Signup";

const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element={<App/>}>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<Signup></Signup>}></Route>
        <Route path="createuser" action={createUser}></Route>
        <Route path="sessions" element={<SessionsIndex></SessionsIndex>} loader={indexLoader}></Route>
        <Route path="sessions/:id" element={<SessionsShow/>} loader={sessionShowLoader}></Route>
        <Route path="newsession" element={<SessionsNew></SessionsNew>} loader={spotsLoader}></Route>
        <Route path="createsession" action={createSession}></Route>
        <Route path="editsession/:id" element={<SessionsEdit></SessionsEdit>} loader={sessionShowLoader}></Route>
        <Route path="updatesession/:id" action={updateSession}></Route>
        <Route path="deletesession/:id" action={deleteSession}></Route>
        <Route path="spots" element={<SpotsIndex></SpotsIndex>} loader={spotsLoader}></Route>
        <Route path="addspot" action={createSpot}></Route>
    </Route>
    </>  
))

export default router