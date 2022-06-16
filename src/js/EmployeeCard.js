import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 1rem;
`;

const H3 = styled.h3`
    margin: 0;
`;

const P = styled.p`
    margin: 0;
`;

const EmployeeCard = ({ hit }) => {
    return (
        <Container>
            <H3>
                {hit.firstName} {hit.lastName}
            </H3>

            <P>{hit.jobTitle}</P>
            <P>{hit.department}</P>
            <P>{hit.years} years</P>
        </Container>
    );
};

export default EmployeeCard;
