import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types';

export const useFetch = (baseUrl) => {


    const [state, setstate] = useState({ data: null, loading: true, error: null });

    const isMounted = useRef(true);

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setstate({ data: null, loading: true, error: null });
        fetch(baseUrl)
            .then(resp => resp.json())
            .then(data => {
                if (isMounted.current) {
                    setstate({
                        data: data,
                        loading: false,
                        error: null
                    });
                }

            });
    }, [baseUrl]);
    return state;
}



useFetch.propTypes = {
    baseUrl: PropTypes.string.isRequired
}