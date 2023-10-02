import React from 'react';

const SubHeading = ({ title, icon }) => {

    return (
        <h5 className="text-lg mt-4 mb-1 text-primary">
            <span className="block px-3 py-1 shadow rounded-full dark:bg-bgDark-50 bg-bgLight">
            { icon && <span className="mr-2"><ion-icon name={icon}/></span> }
            {title}
            </span>
        </h5>
    )
}

export default SubHeading;