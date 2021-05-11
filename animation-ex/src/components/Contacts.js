import React from "react";
import { useScrollFadeIn } from "@/hooks";

const Contacts = () => {
    const animatedItem = useScrollFadeIn();

    return (
        <Wrapper>
            <Title>Contacts</Title>
            <Description>
                dkwodkwodkwodkwodkwodkskdjsuekksodkwidjsldldkslsdusksm dbstjrgnsdlfkrh
            </Description>
            <Form {...animatedItem} />
        </Wrapper>
    )
}

export default Contacts