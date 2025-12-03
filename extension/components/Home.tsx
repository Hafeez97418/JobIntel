import { Box, Container } from "@mui/material"
import SkillsManager from "./ui/Skills"
import UserInfoManager from "./ui/User"


export const Home = () => {
  return (
    <div>
      <Box sx={{ display: "flex", width: "100%" , flexWrap:"wrap"}}>
        <Box sx={{ flexGrow: 1 }}>
          <UserInfoManager />
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <SkillsManager />
        </Box>
      </Box>
    </div>
  )
}
