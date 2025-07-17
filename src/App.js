import './App.css';
import Functional from './components/Functional';
import ClassComp from './components/ClassComp';
import './components/Styles.css'
import EventBinder from './components/EventBinder';
import Form from './components/Form';
import ParentComponet from './components/ParentComponet';
import LifecycleA from './components/LifecycleA';
import Refs from './components/Refs';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundery from './components/ErrorBoundery';
import ClickCounter from './components/ClickCounter';
import HoverComponent from './components/HoverComponent';



function App() {
  return (
    <div className="App">
      <ClickCounter name="stevovo"></ClickCounter>
      <HoverComponent></HoverComponent>
      {/* <ErrorBoundery>
        <Hero heroName="Batman" />
      </ErrorBoundery>
      <ErrorBoundery>
        <Hero heroName="Superman" />
      </ErrorBoundery>
      <ErrorBoundery>
        <Hero heroName="Jocker" />
      </ErrorBoundery> */}
      {/* <PortalDemo /> */}
      {/* <LifecycleA>
      Lifecycle A
      </LifecycleA> */}
      {/* <Refs/> */}
      {/* <ParentComponet /> */}
      
      {/* <Form /> */}
      {/* <EventBinder/> */}
      {/* <Functional>awe</Functional>
      <ClassComp>
       awe
      </ClassComp> */}
    </div>
  );
}

export default App;
