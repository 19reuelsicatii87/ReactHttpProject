import React, { useState } from 'react'

function HookCounterThree() {

    const [name, setName] = useState({
        firstName: '',
        lastName: ''
    })


    return (
        <div>
            <form>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">FirstName</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            value={name.firstName}
                            onChange={e => setName({ ...name, firstName: e.target.value })}
                        />
                    </div>
                    <label className="col-sm-2 col-form-label">Display</label>
                    <div className="col-sm-4">
                        <textarea rows="1" cols="50" className="form-control" defaultValue={name.firstName}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">LastName</label>
                    <div className="col-sm-4">
                        <input type="text" className="form-control"
                            value={name.lastName}
                            onChange={e => setName({ ...name, lastName: e.target.value })}
                        />
                    </div>
                    <label className="col-sm-2 col-form-label">Display</label>
                    <div className="col-sm-4">
                    <textarea rows="1" cols="50" className="form-control" defaultValue={name.lastName}/>
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label">Name Object</label>
                    <div className="col-sm-10">
                        <textarea rows="1" cols="50" className="form-control" 
                        onChange={e => setName({ ...name, name })}
                        value={JSON.stringify(name)}
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default HookCounterThree
