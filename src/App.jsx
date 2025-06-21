import React, { useState } from 'react';

import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ChatDashboard from './pages/ChatDashboard';
import ActiveTablesPage from './pages/ActiveTables';
import AddUsersPage from './pages/AddUser';
import GenerateReportPage from './pages/GenerateReport';
import NotificationsPage from './pages/Notification';
import SettingsPage from './pages/Settings';

const App = () => {
return (
  <Routes>
  <Route exact path="/" element={<Home/>}/>
  <Route exact path="/chat" element={<ChatDashboard/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/signup" element={<SignUp/>}/>
   <Route exact path="/tables" element={<ActiveTablesPage/>}/>
  <Route exact path="/add-user" element={<AddUsersPage/>}/>
  <Route exact path="/report" element={<GenerateReportPage/>}/>
  <Route exact path="/notification" element={<NotificationsPage />}/>
  <Route exact path="/settings" element={<SettingsPage />}/>
  </Routes>
)
}

export default App