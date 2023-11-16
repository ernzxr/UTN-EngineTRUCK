 /*
import { SidebarProvider } from "./context/SidebarContext";

import {
  Alert,
  Avatar,
  Badge,
  Breadcrumb,
  Dropdown,
  ListGroup,
  Modal,
  Navbar,
  Rating,
  Sidebar as FlowbiteSidebar,
  Spinner,
  Table,
  Tabs,
  Timeline,
  Toast,
  Tooltip,
} from "flowbite-react";

import {
  HiAdjustments,
  HiArrowNarrowRight,
  HiArrowSmRight,
  HiChartPie,
  HiCheck,
  HiClipboardList,
  HiCloudDownload,
  HiDatabase,
  HiExclamation,
  HiEye,
  HiHome,
  HiInbox,
  HiOutlineAdjustments,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiUserCircle,
  HiViewBoards,
  HiX,
} from "react-icons/hi";

import { BiBuoy } from "react-icons/bi";

import Image from "next/image";

import Sidebar from "./components/sidebar";

 {       <section>
        <header>
          <h2 className="mb-3 text-4xl font-bold dark:text-gray-200">Alert</h2>
        </header>
        <AlertsExample />
      </section>
        <section>
        <header>
            <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Avatar
            </h2>
        </header>
        <AvatarExample />
        </section>
        <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Badges
          </h2>
        </header>
        <BadgesExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Breadcrumb
          </h2>
        </header>
        <BreadcrumbExample />
      </section>
      <section>
      <header>
        <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
          Button group
        </h2>
      </header>
      <ButtonGroupExample />
        </section>
        <section>
        <NavbarsExample />
        </section>
        <section>
        <ButtonsExample />
        </section>
      <section>
      <header>
        <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
          Dropdown
        </h2>
      </header>
      <DropdownExample />
    </section>
    <section>
    <header>
      <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
        List group
      </h2>
    </header>
    <ListGroupExample />
  </section>
  <section>
  <header>
    <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
      Modal
    </h2>
  </header>
  <ModalExample />
</section>
<section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Rating
          </h2>
        </header>
        <RatingExample />
      </section>
      <section>
        <header>
          <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
            Sidebar
          </h2>
        </header>
        <SidebarExample />
      </section>
      <section>
      <header>
        <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
          Toast
        </h2>
      </header>
      <ToastExample />
    </section>
    <section>
      <header>
        <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
          Tooltips
        </h2>
      </header>
      <TooltipsExample />
    </section>
    <section>
    <header>
      <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
        Tabs
      </h2>
    </header>
    <TabsExample />
  </section>
  <section>
  <header>
    <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
      Spinners
    </h2>
  </header>
  <SpinnersExample />
</section>
<section>
  <header>
    <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
      Tables
    </h2>
  </header>
  <div className="max-w-full overflow-x-scroll">
    <TablesExample />
  </div>
</section>
<section>
  <header>
    <h2 className="mt-9 mb-3 text-4xl font-bold dark:text-gray-200">
      Timeline
    </h2>
  </header>
  <TimelineExample />
</section>
    }

function AlertsExample(): JSX.Element {
    return (
      <Alert
        color="success"
        rounded={false}
        withBorderAccent
        onDismiss={console.log}
        additionalContent={
          <React.Fragment>
            <div className="mt-2 mb-4 text-sm text-green-700 dark:text-green-800">
              More info about this info alert goes here. This example text is
              going to run a bit longer so that you can see how spacing within an
              alert works with this kind of content.
            </div>
            <div className="flex">
              <button
                type="button"
                className="mr-2 inline-flex items-center rounded-lg bg-green-700 px-3 py-1.5 text-center text-xs font-medium text-white hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900"
              >
                <HiEye className="-ml-0.5 mr-2 h-4 w-4" />
                View more
              </button>
              <button
                type="button"
                className="rounded-lg border border-green-700 bg-transparent px-3 py-1.5 text-center text-xs font-medium text-green-700 hover:bg-green-800 hover:text-white focus:ring-4 focus:ring-green-300 dark:border-green-800 dark:text-green-800 dark:hover:text-white"
              >
                Dismiss
              </button>
            </div>
          </React.Fragment>
        }
      >
        <h3 className="text-lg font-medium text-green-700 dark:text-green-800">
          This is a info alert
        </h3>
      </Alert>
    );
  }
  
  function AvatarExample(): JSX.Element {
    return (
      <Avatar
        bordered
        img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
        rounded
      />
    );
  }
  
  function BadgesExample(): JSX.Element {
    return (
      <div className="flex flex-wrap gap-2">
        <Badge color="info" size="sm">
          Info
        </Badge>
        <Badge color="gray" size="sm">
          Gray
        </Badge>
        <Badge color="failure" size="sm">
          Failure
        </Badge>
        <Badge color="success" size="sm">
          Success
        </Badge>
        <Badge color="warning" size="sm">
          Warning
        </Badge>
        <Badge color="indigo" size="sm">
          Indigo
        </Badge>
        <Badge color="purple" size="sm">
          Purple
        </Badge>
        <Badge color="pink" size="sm">
          Pink
        </Badge>
      </div>
    );
  }
  
  function BreadcrumbExample(): JSX.Element {
    return (
      <Breadcrumb aria-label="Default breadcrumb example">
        <Breadcrumb.Item href="#" icon={HiHome}>
          Home
        </Breadcrumb.Item>
        <Breadcrumb.Item href="#">Projects</Breadcrumb.Item>
        <Breadcrumb.Item>Flowbite React</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
  
  function ButtonsExample(): JSX.Element {
    return (
      <div className="flex flex-wrap items-center gap-2">
        <Button outline gradientDuoTone="purpleToBlue">
          Purple to blue
        </Button>
        <Button outline gradientDuoTone="cyanToBlue">
          Cyan to blue
        </Button>
        <Button outline gradientDuoTone="greenToBlue">
          Green to blue
        </Button>
        <Button outline gradientDuoTone="purpleToPink">
          Purple to pink
        </Button>
        <Button outline gradientDuoTone="pinkToOrange">
          Pink to orange
        </Button>
        <Button outline gradientDuoTone="tealToLime">
          Teal to lime
        </Button>
        <Button outline gradientDuoTone="redToYellow">
          Red to yellow
        </Button>
      </div>
    );
  }
  
  function ButtonGroupExample(): JSX.Element {
    return (
      <Button.Group>
        <Button color="gray">
          <HiUserCircle className="mr-3 h-4 w-4" /> Profile
        </Button>
        <Button color="gray">
          <HiAdjustments className="mr-3 h-4 w-4" /> Settings
        </Button>
        <Button color="gray">
          <HiCloudDownload className="mr-3 h-4 w-4" /> Messages
        </Button>
      </Button.Group>
    );
  }

  function RatingExample(): JSX.Element {
    return (
      <div className="flex flex-col justify-center gap-4">
        <Rating>
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star />
          <Rating.Star filled={false} />
          <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
            4.95 out of 5
          </p>
        </Rating>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          1,745 global ratings
        </p>
        <Rating.Advanced percentFilled={70}>5 star</Rating.Advanced>
        <Rating.Advanced percentFilled={17}>4 star</Rating.Advanced>
        <Rating.Advanced percentFilled={8}>3 star</Rating.Advanced>
        <Rating.Advanced percentFilled={4}>2 star</Rating.Advanced>
        <Rating.Advanced percentFilled={1}>1 star</Rating.Advanced>
      </div>
    );
  }
  
  function SidebarExample(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
  
    function toggle() {
      setOpen(!isOpen);
    }
  
    return (
      <>
        <Button color="warning" onClick={toggle}>
          Toggle sidebar
        </Button>
        <div className="my-6 h-96">
          <FlowbiteSidebar aria-label="Example sidebar" collapsed={isOpen}>
            <FlowbiteSidebar.Items>
              <FlowbiteSidebar.ItemGroup>
                <FlowbiteSidebar.Item href="#" icon={HiChartPie}>
                  Dashboard
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item
                  href="#"
                  icon={HiViewBoards}
                  label="Pro"
                  labelColor="gray"
                >
                  Kanban
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item href="#" icon={HiInbox} label="3">
                  Inbox
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item href="#" icon={HiUser}>
                  Users
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item href="#" icon={HiShoppingBag}>
                  Products
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item href="#" icon={HiArrowSmRight}>
                  Sign In
                </FlowbiteSidebar.Item>
                <FlowbiteSidebar.Item href="#" icon={HiTable}>
                  Sign Up
                </FlowbiteSidebar.Item>
              </FlowbiteSidebar.ItemGroup>
            </FlowbiteSidebar.Items>
          </FlowbiteSidebar>
        </div>
      </>
    );
  }
  
  function SpinnersExample(): JSX.Element {
    return (
      <div className="flex flex-wrap gap-2">
        <Spinner color="info" aria-label="info spinner example" />
        <Spinner color="success" aria-label="success spinner example" />
        <Spinner color="failure" aria-label="failure spinner example" />
        <Spinner color="warning" aria-label="Yellow spinner example" />
        <Spinner color="pink" aria-label="Pink spinner example" />
        <Spinner color="purple" aria-label="Purple spinner example" />
      </div>
    );
  }
  
  function TablesExample(): JSX.Element {
    return (
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17&quot;
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Google Pixel Phone
            </Table.Cell>
            <Table.Cell>Gray</Table.Cell>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>$799</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple Watch 5
            </Table.Cell>
            <Table.Cell>failure</Table.Cell>
            <Table.Cell>Wearables</Table.Cell>
            <Table.Cell>$999</Table.Cell>
            <Table.Cell>
              <a
                href="/tables"
                className="font-medium text-blue-600 hover:underline dark:text-blue-500"
              >
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
  
  function TabsExample(): JSX.Element {
    return (
      <Tabs.Group aria-label="Tabs with icons" style="underline">
        <Tabs.Item title="Profile" icon={HiUserCircle}>
          Profile content
        </Tabs.Item>
        <Tabs.Item active title="Dashboard" icon={HiDatabase}>
          Dashboard content
        </Tabs.Item>
        <Tabs.Item title="Settings" icon={HiAdjustments}>
          Settings content
        </Tabs.Item>
        <Tabs.Item title="Contacts" icon={HiClipboardList}>
          Contacts content
        </Tabs.Item>
        <Tabs.Item disabled title="Disabled">
          Disabled content
        </Tabs.Item>
      </Tabs.Group>
    );
  }
  
  function TimelineExample(): JSX.Element {
    return (
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>February 2022</Timeline.Time>
            <Timeline.Title>Application UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get access to over 20+ pages including a dashboard layout, charts,
              kanban board, calendar, and pre-order E-commerce & Marketing pages.
            </Timeline.Body>
            <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>March 2022</Timeline.Time>
            <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
            <Timeline.Body>
              All of the pages and components are first designed in Figma and we
              keep a parity between the two versions even as we update the
              project.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time>April 2022</Timeline.Time>
            <Timeline.Title>E-Commerce UI code in Tailwind CSS</Timeline.Title>
            <Timeline.Body>
              Get started with dozens of web components and interactive elements
              built on top of Tailwind CSS.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    );
  }
  
  function ToastExample(): JSX.Element {
    return (
      <div className="flex flex-col gap-4">
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <HiCheck className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Item moved successfully.</div>
          <Toast.Toggle />
        </Toast>
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <HiX className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">Item has been deleted.</div>
          <Toast.Toggle />
        </Toast>
        <Toast>
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <HiExclamation className="h-5 w-5" />
          </div>
          <div className="ml-3 text-sm font-normal">
            Improve password difficulty.
          </div>
          <Toast.Toggle />
        </Toast>
      </div>
    );
  }
  
  function TooltipsExample(): JSX.Element {
    return (
      <div className="flex gap-2">
        <Tooltip content="Tooltip content" placement="top">
          <Button>Tooltip top</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="right">
          <Button>Tooltip right</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="bottom">
          <Button>Tooltip bottom</Button>
        </Tooltip>
        <Tooltip content="Tooltip content" placement="left">
          <Button>Tooltip left</Button>
        </Tooltip>
      </div>
    );
  }

  function ListGroupExample(): JSX.Element {
    return (
      <div className="w-48">
        <ListGroup>
          <ListGroup.Item active icon={HiUserCircle}>
            Profile
          </ListGroup.Item>
          <ListGroup.Item icon={HiOutlineAdjustments}>Settings</ListGroup.Item>
          <ListGroup.Item icon={HiInbox}>Messages</ListGroup.Item>
          <ListGroup.Item icon={HiCloudDownload}>Download</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
  
  function ModalExample(): JSX.Element {
    const [isOpen, setOpen] = useState(false);
  
    return (
      <>
        <Button onClick={() => setOpen(true)}>Toggle modal</Button>
        <Modal show={isOpen} onClose={() => setOpen(false)}>
          <Modal.Header>Terms of Service</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new
                consumer privacy laws for its citizens, companies around the world
                are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.)
                goes into effect on May 25 and is meant to ensure a common set of
                data rights in the European Union. It requires organizations to
                notify users as soon as possible of high-risk data breaches that
                could personally affect them.
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpen(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpen(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  function NavbarsExample(): JSX.Element {
    return (
      <Navbar fluid rounded>
        <Navbar.Brand href="https://flowbite.com/">
          <Image
            alt="Flowbite logo"
            height="32"
            src="https://flowbite.com/docs/images/logo.svg"
            width="32"
          />
          <span className="self-center whitespace-nowrap pl-3 text-xl font-semibold dark:text-white">
            Flowbite
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/navbars" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="/navbars">About</Navbar.Link>
          <Navbar.Link href="/navbars">Services</Navbar.Link>
          <Navbar.Link href="/navbars">Pricing</Navbar.Link>
          <Navbar.Link href="/navbars">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    );
  }

  function DropdownExample(): JSX.Element {
    return (
      <Dropdown label="Dropdown button">
        <Dropdown.Header>
          <span className="block text-sm">Bonnie success</span>
          <span className="block truncate text-sm font-medium">
            name@flowbite.com
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
    );
  }

{        <div className="order-1">
<ActualSidebar />
</div>}

  function ActualSidebar(): JSX.Element {
    return (
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Kanban
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiInbox}>
              Inbox
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiTable}>
              Sign Up
            </Sidebar.Item>
          </Sidebar.ItemGroup>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Upgrade to Pro
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
              Documentation
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={BiBuoy}>
              Help
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    );
  }

  export default function Index(): JSX.Element {
  return (
    <SidebarProvider>
      <Header />
      
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <HomePage />
        </main>
      </div>
    </SidebarProvider>
  );
}

  */