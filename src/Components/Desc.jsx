import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Container, Row, Col } from "react-bootstrap";

export default () => (
  <section className=" py-5"data-aos="flip-down"data-aos-duration="3000">
    <Container>
      <Tabs>
        <TabList className="d-flex flex-column flex-lg-row">
          <Tab className="fw_400 fs_20 clr_black ff_Poppins ps-0 add ">
            DESCRIPTION
          </Tab>
          <Tab className="fw_400 mb-2 fs_20 clr_black mx-lg-5 my-3 mt-lg-0 ff_Poppins addtext-nowrap">
            ADDITIONAL INFORMATION
          </Tab>
          <Tab className="fw_400 fs_20 clr_black ff_Poppins add ">
            REVIEWS (1)
          </Tab>
        </TabList>

        <TabPanel>
          <p className="fw_400 fs_20 clr_black ff_Poppins">
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
            mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec
            massa in ligula vestibulum mattis. Suspendisse imperdiet lorem
            eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor
            vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non
            pharetra mi. Cura
          </p>
        </TabPanel>
        <TabPanel>
          <p className="fw_400 fs_20 clr_black ff_Poppins">
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in fis. Suspendisse imperdiet lorem eleifend
            nisi euismod, vel consequat ipsum luctus. Morbi auctor vulputate
            hendrerit. Etiam vel lectus tortor. Pellentesque non pharetra mi.
            Cura
          </p>
        </TabPanel>
        <TabPanel>
          <p className="fw_400 fs_20 clr_black ff_Poppins">
            Sed nec ultricies felis, vitae facilisis ipsum. Morbi id turpis
            euismod, rhoncus tortor quis, lobortis sapien. Sed imperdiet nulla
            in leo ullamcorper, in finibus elit porta. Sed eget congue neque,
            mattis finibus neque. In vel dolor ac augue pretium suscipit. Ut nec
            massa in ligula vestibulum mattis. Suspendisse imperdiet lorem
            eleifend nisi euismod, vel consequat ipsum luctus. Morbi auctor
            vulputate hendrerit. Etiam vel lectus tortor. Pellentesque non
            pharetra mi. Cura
          </p>
        </TabPanel>
      </Tabs>
    </Container>
  </section>
);
