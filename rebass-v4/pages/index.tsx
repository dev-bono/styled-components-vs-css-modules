import Link from "next/link";
import { Box } from "rebass/styled-components";

const IndexPage = () => (
  <>
    <h1>First Page (CSS-in-JS)</h1>
    <Box>
      <Link href="/second">
        <a>Go Second</a>
      </Link>
    </Box>
  </>
);

export default IndexPage;
