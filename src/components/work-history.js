import mpfiLogo from "../assets/mpfilogo.png";

function WorkItem({ title, role, image, start, end }) {
  return (
    <li className="flex items-center gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img
          alt=""
          src={image}
          width="32"
          height="32"
          decoding="async"
          data-nimg="1"
          className="h-7 w-7"
          loading="lazy"
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {title}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label="2019 until Present"
        >
          <time datetime="2019">{start}</time> <span aria-hidden="true">—</span>{" "}
          <time datetime="2023">{end}</time>
        </dd>
      </dl>
    </li>
  );
}

function WorkHistory() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-4">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        <WorkItem
          title="Microsoft"
          role="Software Engineer"
          image={
            "https://th.bing.com/th/id/R.3d6a2ad56bc3403c5cfcc3efe09b741b?rik=gnNKMMZSvZ3uMA&riu=http%3a%2f%2fpurepng.com%2fpublic%2fuploads%2flarge%2fpurepng.com-microsoft-logo-iconlogobrand-logoiconslogos-251519939091wmudn.png&ehk=1%2fl4i5MeDLTCpvZhUZlCefvhSzsGR16HIPqagpDxYDg%3d&risl=&pid=ImgRaw&r=0"
          }
          start="2020"
          end="Present"
        />
        <WorkItem
          title="Samsung Research"
          role="Software Engineer Intern"
          image={
            "https://media.licdn.com/dms/image/C560BAQH3lurqecHRug/company-logo_200_200/0/1615243991291?e=1683158400&v=beta&t=AXBtCOf1dPlrzIlMp37K6Q3VeAMUTmXygv_mmdUn3hU"
          }
          start="2019"
          end="2020"
        />
        <WorkItem
          title="MPFI: Mobile Payments Forum of India"
          role="Web Development Manager"
          image={mpfiLogo}
          start="2017"
          end="2019"
        />
      </ol>
    </div>
  );
}

export default WorkHistory;
