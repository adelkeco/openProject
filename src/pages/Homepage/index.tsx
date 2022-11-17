import Sidebar from 'components/Navigation/Sidebar';
import Content from 'components/Content/Content';
import Selection from 'components/Selection/Selection';

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