import AddTaskPage from "./pages/AddTaskPage/AddTaskPage"
import AddThemePage from "./pages/AddThemePage/AddThemePage"
import AdminHomeworksPage from "./pages/AdminHomeworksPage/AdminHomeworksPage"
import CourseInfoPage from "./pages/CourseInfoPage/CourseInfoPage"
import CoursesPage from "./pages/CoursesPage/CoursesPage"
import HomeworkPage from "./pages/HomeworkPage/HomeworkPage"
import LoginPage from "./pages/LoginPage/LoginPage"
import MainPage from "./pages/MainPage/MainPage"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import TaskPage from "./pages/TaskPage/TaskPage"

export const publicRoutes = [
	{
		path: '/main',
		Component: MainPage
	},
	{
		path: '/login',
		Component: LoginPage
	},
	{
		path: '/register',
		Component: RegisterPage
	}
]

export const privateRoutes = [
	{
		path: '/main',
		Component: MainPage
	},
	{
		path: '/login',
		Component: LoginPage
	},
	{
		path: '/register',
		Component: RegisterPage
	},
	{
		path: '/courses',
		Component: CoursesPage
	},
	{
		path: '/coursepage/:id',
		Component: CourseInfoPage
	},
	{
		path: '/task/:id',
		Component: TaskPage
	},
	{
		path: '/homework/:id',
		Component: HomeworkPage
	},
	{
		path: '/addtheme/:id',
		Component: AddThemePage
	},
	{
		path: '/addtask/:id',
		Component: AddTaskPage
	},
	{
		path: '/adminhomeworks',
		Component: AdminHomeworksPage
	}
]