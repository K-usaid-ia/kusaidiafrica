"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function AdminGuide() {
  return (
    <Card className="bg-white shadow-md rounded-lg overflow-hidden">
      <CardHeader className="bg-blue-600 text-white">
        <CardTitle className="text-xl font-bold">Kusaidia Admin Guide</CardTitle>
        <CardDescription className="text-sm">Essential information for the admin team on project verification and management</CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="verification">
            <AccordionTrigger className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md p-3">
              Project Verification Process
            </AccordionTrigger>
            <AccordionContent className="space-y-6 bg-gray-50 p-4 rounded-md">
              <div>
                <h3 className="font-semibold text-gray-800">1. Initial Review</h3>
                <p className="text-gray-600">When a project enters the "pending_review" status, carefully examine:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Project description and goals for clarity and feasibility</li>
                  <li>Organization credentials and history</li>
                  <li>Location and beneficiary information for accuracy</li>
                  <li>Contact information for completeness</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">2. Success Metrics Validation</h3>
                <p className="text-gray-600">Strong success metrics should be:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Specific and measurable (e.g., "500 students will have access to clean water")</li>
                  <li>Relevant to the project goals</li>
                  <li>Achievable within the project scope and timeline</li>
                  <li>Time-bound with clear deadlines</li>
                </ul>
                <p className="mt-2 text-amber-600 font-medium">If metrics appear vague or unmeasurable, edit them to be more concrete before approval.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">3. Impact Assessment Review</h3>
                <p className="text-gray-600">Effective impact assessment methods should describe:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Data collection techniques (surveys, interviews, observations)</li>
                  <li>Frequency of measurement (e.g., baseline, midpoint, completion)</li>
                  <li>Who will be conducting the assessment</li>
                  <li>How results will be reported and verified</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">4. Milestone Evaluation</h3>
                <p className="text-gray-600">Check that each milestone:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Has a clear deliverable</li>
                  <li>Includes a reasonable budget allocation</li>
                  <li>Has a feasible timeline</li>
                  <li>Together, milestones should cover the full project scope</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fees">
            <AccordionTrigger className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md p-3">
              Setting Fees
            </AccordionTrigger>
            <AccordionContent className="space-y-6 bg-gray-50 p-4 rounded-md">
              <div>
                <h3 className="font-semibold text-gray-800">Vetting Fee Guidelines</h3>
                <p className="text-gray-600">When setting vetting fees, consider:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Project complexity (more complex projects require more thorough vetting)</li>
                  <li>Typical range: 1-3% of total project budget</li>
                  <li>Higher risk projects may warrant higher fees</li>
                  <li>First-time organizations might require more extensive vetting</li>
                </ul>
                <p className="mt-2 text-blue-600 font-medium">Remember: Vetting fees directly affect the total funding goal, potentially extending the fundraising period.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Insurance Fee Guidelines</h3>
                <p className="text-gray-600">Insurance fees should be applied when:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Projects involve physical construction or infrastructure</li>
                  <li>Activities have inherent safety risks</li>
                  <li>Project involves vulnerable populations</li>
                  <li>Project timeline extends beyond one year</li>
                </ul>
                <p className="mt-2">Typical insurance rates:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Low-risk projects: 1-2% of budget</li>
                  <li>Medium-risk projects: 3-5% of budget</li>
                  <li>High-risk projects: 6-10% of budget</li>
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-md border border-amber-200">
                <h3 className="font-semibold text-amber-800">Important Note on Fee Changes</h3>
                <p className="mt-1 text-amber-700">
                  Changing vetting and insurance fees affects the total funding goal, which in turn impacts:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-amber-700">
                  <li>Funding percentage (even if donation amount stays the same)</li>
                  <li>Project status transitions (may delay moving to "active" status)</li>
                  <li>Donor perceptions of project efficiency</li>
                  <li>Amount available for actual implementation vs. administration</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="blockchain">
            <AccordionTrigger className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-md p-3">
              Blockchain Management
            </AccordionTrigger>
            <AccordionContent className="space-y-6 bg-gray-50 p-4 rounded-md">
              <div>
                <h3 className="font-semibold text-gray-800">Registration Process</h3>
                <p className="text-gray-600">After a project is approved, it's automatically registered on the blockchain:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>The <code className="text-gray-800 bg-gray-100 rounded-md p-1">register_project_on_blockchain</code> task creates a blockchain record</li>
                  <li>When successful, <code className="text-gray-800 bg-gray-100 rounded-md p-1">blockchain_tx_hash</code> will be populated</li>
                  <li>Later, <code className="text-gray-800 bg-gray-100 rounded-md p-1">contract_address</code> will be populated after confirmation</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Troubleshooting Registration Issues</h3>
                <p className="text-gray-600">If blockchain registration fails:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Check that the organization has a valid <code className="text-gray-800 bg-gray-100 rounded-md p-1">wallet_address</code></li>
                  <li>Verify network connectivity to the blockchain provider</li>
                  <li>Ensure contract registry has deployed the required contracts</li>
                  <li>Check transaction status on the blockchain explorer</li>
                </ul>
                <p className="mt-2 text-blue-600 font-medium">You can manually trigger registration by clicking "Register on Blockchain" from the project details page.</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800">Milestone Registration</h3>
                <p className="text-gray-600">Milestones are registered after the project is fully registered:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  <li>Each milestone needs a vendor with a valid wallet address</li>
                  <li>The <code className="text-gray-800 bg-gray-100 rounded-md p-1">register_project_milestones</code> task handles this</li>
                  <li>Purchase orders are created for each milestone</li>
                  <li>Successful registration will populate <code className="text-gray-800 bg-gray-100 rounded-md p-1">blockchain_tx_hash</code> for milestones</li>
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
