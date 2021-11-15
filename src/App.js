import './App.css';
// import Unorderlist from './componentsForList/UnorderList';
// import List from './componentsForList/List';
import Heading from './componentForMobile/Heading';
import UnorderList from './componentForMobile/UnorderDefaultList';
import List from './componentForMobile/listMaker'
function App() {
  return (
    <>
    {/* <Unorderlist/>
    <List heading={"product 1"} name="soap" src="https://i.imgur.com/HYQbmZt.png"/>
    <List heading={"product 2"} name="ditergent" src="https://i.imgur.com/HYQbmZt.png"/>

    <List heading={"product 3"} name="shampoo" src="https://i.imgur.com/HYQbmZt.png"/>

    <List heading={"product 4"} name="sanitizers" src="https://i.imgur.com/HYQbmZt.png"/> */}
    <Heading title="Mobile operating System"/>
    <UnorderList 
    li={<List type="default" name="Android"/>}
    />
    <UnorderList 
    li={<List type="default" name="blackberry"/>}
    />
    <UnorderList 
    li={<List type="default" name="iPhone"/>}
    />
    <UnorderList 
    li={<List type="default" name="Windows phone"/>}
    />
    <Heading title="Mobile Manufacturers"/>
    <UnorderList 
    li={<List type="square" name="Sumsung"/>}
    />
    <UnorderList 
    li={<List type="square" name="HTC"/>}
    />
    <UnorderList 
    li={<List type="default" name="Micromax"/>}
    />
 <UnorderList 
    li={<List type="circle" name="Apple"/>}
    />
       
    
    </>
    
  );
}

export default App;
