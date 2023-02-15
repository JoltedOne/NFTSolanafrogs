import React, { useEffect, useState } from 'react';
import { LineProgressBar } from '@frogress/line';

interface ClaimedSupplyProps {
    program: any;
}

const ClaimedSupply: React.FC<ClaimedSupplyProps> = ({ program }) => {
    const [claimedSupply, setClaimedSupply] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const supply = await program.totalClaimedSupply();
            setClaimedSupply(supply);
        }
        fetchData();
    }, [program]);

    const percent = (claimedSupply / 500) * 100;

    return (
        <div>
            <h2> {claimedSupply} Frogs Minted!</h2>
            <LineProgressBar 
                percent={percent}
                progressColor="linear-gradient(to right, #d2ff00, #54ff00)"
                containerColor="#4c8320" 
                rounded={30}
                height={60}
            />
        </div>
    );
}

export default ClaimedSupply;