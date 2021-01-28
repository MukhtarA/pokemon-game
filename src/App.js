import './App.css';
import Header from "./components/Header";
import React from "react";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg1 from "./assets/bg1.jpg"
import bg3 from './assets/bg2.jpg'

const App = () => {
    return(
        <>
            <Header title='Pokemon app' descr='Simple code' />
            <Layout id={1} urlBg={bg1} title="Lorem" />
            <Layout id={2} colorBg='red' title="Lorem" />
            <Layout id={3} urlBg={bg3} title="Lorem" />
            <Footer />
        </>
    );
}

export default App;
