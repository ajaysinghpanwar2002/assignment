import React from 'react';
import { render, screen } from '@testing-library/react';
import SideBar from './SideBar';

describe('Sidebar component', () => {
    it('renders Dashboard item', () => {
        render(<SideBar />);
        const dashboardItem = screen.getByText('Dashboard');
        expect(dashboardItem).toBeInTheDocument();
    });

    it('renders Skill Test item with a highlight', () => {
        render(<SideBar />);
        const skillTestItem = screen.getByText('Skill Test');
        expect(skillTestItem).toBeInTheDocument();
        const skillTestIcon = screen.getByAltText('Skill Test');
        expect(skillTestIcon).toBeInTheDocument();
        const skillTestColor = screen.getByText('Skill Test');
        expect(skillTestColor).toHaveClass('SkillTest-color');
    });

    it('renders Internships item', () => {
        render(<SideBar />);
        const internshipsItem = screen.getByText('Internships');
        expect(internshipsItem).toBeInTheDocument();
    });
});
