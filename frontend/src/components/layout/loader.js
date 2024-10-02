import React, { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useLoading } from '../../context/loadingContext';

const Loader = () => {
    const { isLoading } = useLoading();

    
    if (!isLoading) return null;
    return (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#6366f1"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;
