import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChakraProvider, Container } from '@chakra-ui/react';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import AuthRoute from './routes/AuthRoutes';

import Home from './pages/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import SinglePost from './components/Post';

function App() {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Container maxW="container.xl">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<AuthRoute element={<Login />} />} />
            <Route path="/signup" element={<AuthRoute element={<Signup />} />} />
            <Route path="/posts/:postId" element={<SinglePost />} />
          </Routes>
        </Container>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;