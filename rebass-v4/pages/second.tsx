import Link from "next/link";
import { Box, Flex, Button, Text } from "rebass/styled-components";
import styled from "styled-components";
import { COLORS } from "../src/theme";
import { Fragment } from "react";

const SecondPage = () => (
  <>
    <h1>Second Page (CSS-in-JS)</h1>
    <Box mb="10px">
      <Link href="/">
        <a>Go First</a>
      </Link>
    </Box>
    <Flex flexDirection="column" mx="auto" sx={{ maxWidth: "720px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(number => (
        <Fragment key={number}>
          <Flex
            justifyContent="space-between"
            bg="lightGrey3"
            p="6px"
            mb="20px"
            sx={{
              "& > div": {
                height: "160px",
                borderRadius: "12px",
                margin: "4px",
              },
            }}
          >
            <Flex
              flexDirection="column"
              alignContent="stretch"
              width="200px"
              bg="yellow3"
              p="10px"
              sx={{
                "& > div": {
                  margin: "4px",
                  flex: "1 0 0",
                  borderRadius: "5px",
                },
              }}
            >
              <Box bg="red3" />
              <Box bg="blue2" />
            </Flex>
            <Flex
              width="140px"
              bg="red3"
              alignContent="stretch"
              p="10px"
              sx={{ "& > div": { flex: "1 0 0", borderRadius: "4px" } }}
            >
              <Box bg="pink" mr="10px" />
              <Box bg="green" />
            </Flex>
            <Flex
              width="160px"
              bg="blue2"
              flexDirection="column"
              alignContent="stretch"
              p="8px"
              sx={{
                "& > div": {
                  borderRadius: "12px",
                  margin: "4px",
                  flex: "1 0 0",
                },
              }}
            >
              <Box bg="pink" />
              <Box
                bg="pink"
                sx={{ border: `1px solid ${COLORS.lightGrey2}` }}
              />
              <Box
                bg="pink"
                sx={{ border: `1px solid ${COLORS.lightGrey4}` }}
              />
            </Flex>
            <Flex
              width="160px"
              bg="pink"
              flexWrap="wrap"
              p="4px"
              sx={{ "& > div": { margin: "2px", borderRadius: "8px" } }}
            >
              <Box bg="yellow1" flex="1 1 0" />
              <Box bg="yellow2" flex="1 1 0" />
              <Box
                bg="yellow3"
                flex="0 1 100%"
                sx={{ border: `1px solid ${COLORS.green}` }}
              />
              <Box bg="yellow4" flex="1 1 0" />
              <Box bg="yellow5" flex="1 1 0" />
              <Box
                bg="yellow1"
                flex="1 1 0"
                sx={{ border: `1px solid ${COLORS.orange}` }}
              />
            </Flex>
          </Flex>
          <Flex justifyContent="space-between" mb="16px">
            <Flex
              flexDirection="column"
              flex="1 0 auto"
              mr="10px"
              p="10px"
              bg="black2"
              sx={{ borderRadius: "8px", "& > button": { margin: "5px" } }}
            >
              <Button variant="pink_green" sx={{ padding: "10px" }}>
                <Text color="black1">Button</Text>
              </Button>
              <Button variant="blue1_ligthGrey2" sx={{ padding: "4px" }}>
                <Text color="white">Button</Text>
              </Button>
              <Button variant="green_transparent">
                <Text color="grey1">Button</Text>
              </Button>
              <Button variant="red3_transparent">
                <Text color="white">Button</Text>
              </Button>
              <Button variant="red4_transparent">
                <Text color="white" py="20px">
                  Button
                </Text>
              </Button>
            </Flex>
            <Flex
              flexDirection="column"
              flex="1 0 auto"
              p="10px"
              bg="yellow2"
              justifyContent="space-between"
              sx={{
                borderRadius: "12px",
                "& > button": { margin: "4px 6px", flex: "1 0 auto" },
              }}
            >
              <Button variant="black1_red2" sx={{ margin: "5px" }}>
                <Text color="white">Button</Text>
              </Button>
              <Button
                variant="black1_orange"
                sx={{ marginLeft: "100px !important" }}
              >
                <Text color="white">Button</Text>
              </Button>
              <Button variant="lightGrey1_black2">
                <Text color="grey1" mr="10px">
                  Button
                </Text>
              </Button>
              <Button
                variant="lightGrey3_blue3"
                sx={{ marginRight: "100px !important" }}
              >
                <Text color="grey2">Button</Text>
              </Button>
              <Button variant="lightGrey3_white">
                <Text color="black1">Button</Text>
              </Button>
            </Flex>
          </Flex>
          <StyledThirdRow index={number} mb="20px" sx={{ borderRadius: "6px" }}>
            <StyledFlex>
              <Button variant="white_lightGrey1" sx={{ padding: "10px" }}>
                <Text color="pink">Button</Text>
              </Button>
              <Button variant="white_black2" sx={{ padding: "4px" }}>
                <Text color="green">Button</Text>
              </Button>
              <Button variant="white_lightGrey2">
                <Text color="black2">Button</Text>
              </Button>
            </StyledFlex>
            <StyledFlex2>
              <Button variant="red4_blue2">
                <Text color="black2">Button</Text>
              </Button>
              <Button variant="yellow1_blue2" sx={{ paddingBottom: "12px" }}>
                <Text color="grey1">Button</Text>
              </Button>
            </StyledFlex2>
            <StyledFlex3 mt="20px" sx={{ "& > button": { flex: "1 0 0" } }}>
              <Button variant="yellow1_black2">
                <Text color="grey1">Button</Text>
              </Button>
              <Button variant="yellow1_lightGrey3">
                <Text color="grey2" sx={{ padding: "6px" }}>
                  Button
                </Text>
              </Button>
              <Button variant="yellow1_green">
                <Text color="grey3">Button</Text>
              </Button>
              <Button variant="yellow3_black2">
                <Text color="grey4" sx={{ paddingBottom: "4px" }}>
                  Button
                </Text>
              </Button>
            </StyledFlex3>
          </StyledThirdRow>
        </Fragment>
      ))}
    </Flex>
  </>
);

const StyledThirdRow = styled(Flex).attrs({ flexDirection: "column" })<{
  index: number;
}>`
  margin-top: ${props => props.index * 20}px;
  padding: 0;
  background: ${props =>
    props.index % 3 === 0
      ? COLORS.grey3
      : props.index % 3 === 1
      ? COLORS.grey4
      : COLORS.grey5};
  & > div {
    box-shadow: ${({ index }) => {
      return `${(index % 3) * 4 + 2}px ${(index % 3) * 3 + 1}px 5px #44444460`;
    }};
  }
`;

const StyledFlex = styled(Flex)`
  margin: 10px;
  padding: 0px;
  & > button {
    margin: 5px;
    flex: 1 0 auto;
  }
  background: rgba(0, 0, 0, 0.3);
`;
const StyledFlex2 = styled(Flex)`
  margin: 5px;
  padding: 5px;
  & > button {
    margin: 5px;
    flex: 1 0 auto;
    height: 100px;
  }
  background: ${COLORS.yellow4};
`;
const StyledFlex3 = styled(Flex)`
  margin: 6px;
  padding: 10px;
  & > button {
    margin: 5px;
  }
  background: ${COLORS.blue2};
  border-radius: 5px;
`;

export default SecondPage;
