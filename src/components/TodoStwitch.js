import React, {Component} from 'react';

class TodoStwitch extends Component {
    render() {
        const {secim,secimNo}=this.props
        return (
            <div>
                <div className={"row"}>
                    <div className={"card col-4 mx-auto m-2 mt-5"}>
                        <div className={"row"}>
                            <div className={secimNo ?"col-6 alti1 text-center":"col-6  text-center"} > <button type="button" className="btn btn-block" onClick={()=>secim(1)}>Login</button></div>
                            <div className={secimNo ?"col-6text-center":"col-6  alti1  text-center"} ><button type="button" className="btn btn-block " onClick={()=>secim(2)}>Register</button></div>
                        </div>
                    </div>


                </div>
            </div>
        );
    }
}

export default TodoStwitch;