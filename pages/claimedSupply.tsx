import React, { useEffect, useState } from 'react';

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

    return (
        <div>
            <h2> {claimedSupply} Frogs Minted!</h2>
        </div>
    );
}

export default ClaimedSupply;
