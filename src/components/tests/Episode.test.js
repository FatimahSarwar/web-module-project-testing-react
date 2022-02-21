import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisodes = {
    id:1,
    name:"",
    image: 'https://i.ibb.co/2FsfXqM/stranger-things.png',
    season: 1,
    summary: 'test summary',
    runtime: 1
}
const testWithoutImage = {
    id:1,
    name:"",
    season: 1,
    summary: 'test summary',
    runtime: 1
}



test("renders without error", () => { 
    render(<Episode episode = {testEpisodes}/>)
});

test("renders the summary test passed as prop", () => { render(<Episode episode = {testEpisodes}/>) 
const summary = screen.queryByText(/test summary/i)
expect(summary).toBeInTheDocument();
expect(summary).toBeTruthy();
expect(summary).toHaveTextContent('test summary');

});

test("renders default image when image is not defined", () => {
    render(<Episode episode = {testWithoutImage}/>) 


 });
