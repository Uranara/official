
import Hero from "../../components/Hero";
import Features from "../../components/Features";
import About from "../../components/About";
import Idea from "../../components/Idea";
import Counter from "../../components/Counter";
import Clients from "../../components/Clients";
import Blogs from "../../components/Blogs";
import Subscribe from "../../components/Subscribe";


export default function Home() {
    return (
        <>
            <Hero></Hero>
            <Features></Features>
            <About></About>
            <Idea></Idea>
            <Counter></Counter>
            {/*<Clients></Clients>*/}
            <Blogs></Blogs>
            <Subscribe></Subscribe>
        </>
    );
}
