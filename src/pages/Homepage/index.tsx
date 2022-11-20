import Sidebar from 'Components/Navigation/Sidebar';
import Content from 'Components/Content/Content';
import Selection from 'Components/Selection/Selection';

const Homepage = () => {
    return (
        <div className="row">
            <div className='col-sm-2' ><Sidebar/></div>
            <div className='col-sm-8' ><Content/></div>
            <div className='col-sm-2' ><Selection/></div>
        </div> 
    )
}

export default Homepage;