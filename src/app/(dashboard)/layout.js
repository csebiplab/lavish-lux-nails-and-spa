import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Dashboard.css"
// import { Ubuntu } from "next/font/google";
import ThemeProvider from "@/components/Dashboard/layout/ThemeProvider";
import Nav from "@/components/Dashboard/layout/nav";
import DashboardShell from "@/components/Dashboard/layout/shell";
import DashboardHeader from "@/components/Dashboard/layout/DashboardHeader";

// const ubuntu = Ubuntu({
//     subsets: ["latin"],
//     weight: ["300", "400", "500", "700"],
// });

export const metadata = {
    title: "Maricila's Cleaning Dashboard",
    description: "Maricila's Cleaning Dashboard",
};

export default async function DashboardLayout({ children }) {
    return (
        <html>
            {/* <body className={ubuntu.className}> */}
            <body>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <div className="flex flex-row p-3 gap-3 h-screen">
                        <aside
                            className="max-h-screen w-60 p-5 bg-gray-3 border border-gray-2  
                                    rounded-lg sticky top-0 max-md:hidden overflow-scroll"
                        >
                            <Nav />
                        </aside>
                        <main className="flex-1 bg-gray-3 border border-gray-2  rounded-lg  max-h-screen overflow-auto pb-5 ">
                            <DashboardShell>
                                <DashboardHeader title={""} />
                                {children}
                            </DashboardShell>
                        </main>
                        <ToastContainer position="top-center" />
                    </div>
                </ThemeProvider>
            </body>

        </html>
    );
}
