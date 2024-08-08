// AdminDashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import {
  AdminDashboardContainer,
  Content,
  TopContent,
  Section,
  SectionTitle,
  CardContainer,
  Card,
  CardTitle,
  CardContent,
  BottomContent,
} from '../../styles/DashboardStyles';
import Announcement from './Announcement';

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AdminDashboardContainer>
      <Sidebar />
      <Content isOpen={isOpen}>
        <TopContent>
          <Section>
            <SectionTitle>Overview</SectionTitle>
            <CardContainer>
              <Card>
                <CardTitle>Total Students</CardTitle>
                <CardContent>500</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Teachers</CardTitle>
                <CardContent>50</CardContent>
              </Card>
              <Card>
                <CardTitle>Total Classes</CardTitle>
                <CardContent>50</CardContent>
              </Card>
            </CardContainer>
          </Section>
        </TopContent>

        <BottomContent>
          <Announcement/>
        </BottomContent>
      </Content>
    </AdminDashboardContainer>
  );
};

export default AdminDashboard;
