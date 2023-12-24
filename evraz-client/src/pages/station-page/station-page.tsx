import { Container } from "react-bootstrap";
import { PageForm } from "../../components/form";
import { StationPageContent } from "../../components/station-page-content/station-page-content";
import styles from "./station-page.module.css";
import { Header } from "../../components/header/header";

export function StationPage() {
  return (
    <Container style={{margin: '20px auto'}}>
      <div className={styles.page}>
        <PageForm>
          <>
            <StationPageContent />
          </>
        </PageForm>
      </div>
    </Container>
  );
}
