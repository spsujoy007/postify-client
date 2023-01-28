import React from 'react';

const Container = ({children}) => {
    return (
        <div className='lg:md:max-w-[600px] px-3 md:px-0 mx-auto'>
            {children}
        </div>
    );
};

export default Container;