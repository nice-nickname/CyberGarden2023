import { Container } from "react-bootstrap";
import { PageForm } from "../../components/form";
import { StationPageContent } from "../../components/station-page-content/station-page-content";
import styles from "./station-page.module.css";

export function StationPage() {
  return (
    <Container>
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
