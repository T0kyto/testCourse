import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface userInterface{
	uid: string | null
	username: string | null
}

const initialState: userInterface = {
	uid: null,
	username: null
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action: PayloadAction<userInterface>){
			state.uid = action.payload.uid
			state.username = action.payload.username
		},
		eraseUser(state){
			state.uid = null
			state.username = null
		}
	}
})

export default userSlice.reducer
export const { setUser, eraseUser } = userSlice.actions