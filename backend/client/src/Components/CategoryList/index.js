import { Box } from "@material-ui/core"
import Category from "./Category"

const CategoryList = () => {
    return (
        <Box>
            {[1, 2, 3].map(item => {
                return (
                    <Category key={item}/>
                )
            })}
        </Box>
    )
}

export default CategoryList